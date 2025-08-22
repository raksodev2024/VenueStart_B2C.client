import Hero from "./components/Hero/Hero";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <Hero image="/HomeBanner.jpg" title="home">
        <div id="mainPage" className={styles.mainPage}>
          {/* TODO
            Add Controls here
           */}
        </div>
      </Hero>

      <div className="row">
        <div className="col-md-12 text-center">
          <div className="d-flex justify-content-center align-items-center text-center">
            <p className={styles.homepageTitle}>
              Explore the
              <span className={styles.homepageTitleItalize}> Philppines </span>
              Best
              <span className={styles.homepageTitleItalize}> Venues </span>
              for Corporate Events
            </p>
          </div>
          <p className="small">
            Discover curated spaces across the country—perfect for meetings, off-sites, and team celebrations.
          </p>
        </div>
      </div>
    </>
  );
}
