import Header from "./header";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <Header />
        </div>
        <div id="detail"></div>
      </>
    );
  }