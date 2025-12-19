import styles from "./style.module.scss";

const AppLayout = ({ children }) => {
  return <div className={styles.mainWrapper}>{children}</div>;
};
export default AppLayout;
