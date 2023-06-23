import './style.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Student Directory</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}