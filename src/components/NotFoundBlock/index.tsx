import React from 'react'
import styles from './NotFoundBlock.module.scss'

type NotFoundBlockProps = {
    description: string
}

const NotFoundBlock: React.FC<NotFoundBlockProps> = ({ description }) => {

    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br />
                Ничего не найдено
            </h1>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default NotFoundBlock
