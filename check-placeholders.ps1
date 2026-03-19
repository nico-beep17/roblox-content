# Roblox Content Machine - Placeholder Validator
# Run this AFTER replacing your real credential IDs to check for any you missed.
# Usage: Right-click -> Run with PowerShell  (or: powershell .\check-placeholders.ps1)

$files = @(
    "n8n-workflow-1-daily-director.json",
    "n8n-workflow-3-the-publisher.json",
    "n8n-workflow-4-the-analyst.json",
    "n8n-workflow-5-the-compiler.json",
    "n8n-workflow-6-the-dealmaker.json",
    "n8n-workflow-7-the-scout.json",
    "n8n-workflow-8-the-engager.json",
    "n8n-workflow-error-handler.json",
    "n8n-social-upload-nodes.json"
)

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$found = $false

Write-Host ""
Write-Host "Scanning n8n workflow files for unreplaced placeholders..." -ForegroundColor Cyan
Write-Host ""

foreach ($file in $files) {
    $path = Join-Path $scriptDir $file
    if (-not (Test-Path $path)) {
        Write-Host "  WARNING  File not found: $file" -ForegroundColor Yellow
        continue
    }

    $content = Get-Content $path -Raw
    $results = [regex]::Matches($content, 'YOUR_[A-Z_]+')

    if ($results.Count -gt 0) {
        $found = $true
        $unique = $results | ForEach-Object { $_.Value } | Sort-Object -Unique
        Write-Host "  PENDING  $file - $($unique.Count) placeholder(s):" -ForegroundColor Red
        foreach ($placeholder in $unique) {
            Write-Host "           - $placeholder" -ForegroundColor DarkRed
        }
    } else {
        Write-Host "  DONE     $file - all placeholders replaced" -ForegroundColor Green
    }
}

Write-Host ""
if (-not $found) {
    Write-Host "All clear! Every placeholder has been replaced." -ForegroundColor Green
    Write-Host "You are ready to import into n8n." -ForegroundColor Green
} else {
    Write-Host "Replace the remaining placeholders above, then re-run this script." -ForegroundColor Yellow
}
Write-Host ""
