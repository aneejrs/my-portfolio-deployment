export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Aneej R Suku.
          All rights reserved.
        </p>

        <p>
          Designed & built with Next.js
        </p>
      </div>
    </footer>
  );
}