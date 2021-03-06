import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você subiu de nível</p>

        <button type="button">
          <img
            onClick={closeLevelUpModal}
            src="/icons/close.svg"
            alt="Fechar modal1"
          />
        </button>
      </div>
    </div>
  );
}
