
export default function RootLayout({ children }) {
  return <html lang="en">
    <body>
      {/* Insert page content */}
      {/* {props.children} */}
      <div id="rootLayout">
        {children}
      </div>
    </body>
  </html>
}