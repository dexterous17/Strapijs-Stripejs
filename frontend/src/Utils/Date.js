export function Datefunction(data) {
    return new Date(data).toLocaleDateString(
        'en-ca',
        {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        }
    )
}