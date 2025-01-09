import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className= {styles.title}>Home Page</h1>
        <p className= {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien ut odio blandit tincidunt. Praesent vehicula nisl vel massa tempus, vitae consectetur felis fringilla. Fusce iaculis risus et nisi efficitur, a venenatis lorem tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
        <p className= {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id sapien ut odio blandit tincidunt. Praesent vehicula nisl vel massa tempus, vitae consectetur felis fringilla. Fusce iaculis risus et nisi efficitur, a venenatis lorem tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

        <Link href="/ninjas"className= {styles.btn}> See Ninja Listing </Link>
      </div>
    </>
  );
}
