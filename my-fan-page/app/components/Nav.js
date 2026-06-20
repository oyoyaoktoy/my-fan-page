import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "16px", marginBottom: "1rem" }}>
      <Link style = {{color: "white", textDecoration: "none", fontSize: "20px"}} href="/">Home</Link>
      <Link style = {{color: "white", textDecoration: "none", fontSize: "20px"}} href="/about">About</Link>
    </nav>
  );
}
