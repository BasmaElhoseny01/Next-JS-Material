import Link from 'next/link';
import styles from '../../styles/Jobs.module.css';

// This Data is Fetched at Build Time (Static Generation) before the page is rendered :D
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
    return (
      <div>
        <h1>All Ninjas</h1>
        { ninjas.map(ninja => (
          <div key={ninja.id}>
            <Link href= {"/ninjas/"+ ninja.id} className = {styles.single}>
              <h3>{ ninja.name }</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default Ninjas;