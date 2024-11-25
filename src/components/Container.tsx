import type {
  ChildrenPropsType,
  ContainerPropsType
} from '../types/types';
import styles from '../styles/container.module.css';

const Container = ({ children, large = false }: ChildrenPropsType & ContainerPropsType) => {
  return (
    <div className={ large ? styles.large : styles.default}>
      {children}
    </div>
  );
};

export default Container;