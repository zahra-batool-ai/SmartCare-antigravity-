param([int]$Port = 5050)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "SmartCare server running on http://localhost:$Port/"

$root = (Get-Location).Path

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $response.KeepAlive = $false

        $path = $request.Url.LocalPath
        if ($path -eq "/" -or [string]::IsNullOrWhiteSpace($path)) {
            $path = "/index.html"
        }

        $localPath = [System.IO.Path]::Combine($root, $path.TrimStart('/').Replace('/', '\'))

        if ([System.IO.File]::Exists($localPath)) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            if ($localPath.EndsWith(".html")) {
                $response.ContentType = "text/html; charset=utf-8"
            } elseif ($localPath.EndsWith(".css")) {
                $response.ContentType = "text/css; charset=utf-8"
            } elseif ($localPath.EndsWith(".js")) {
                $response.ContentType = "application/javascript; charset=utf-8"
            } elseif ($localPath.EndsWith(".json")) {
                $response.ContentType = "application/json; charset=utf-8"
            } elseif ($localPath.EndsWith(".svg")) {
                $response.ContentType = "image/svg+xml"
            }

            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
}
