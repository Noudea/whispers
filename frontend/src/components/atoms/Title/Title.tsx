import styles from './Title.module.css';


const Title = ({title}: {title:string}) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
