import Link from "next/link";
import styles from "./page.module.css";
import Products from "./products/page";

export default function Home() {

  return (
    <>
      <section className="products-section">
        <h2>Popüler Ürünler</h2>
        <Products />
      </section>
      <footer>
        <p>&copy; 2024 E-Ticaret Mağazası. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}
