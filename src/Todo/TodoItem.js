import react from 'react'

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        margingBottom: '.5rem',
    },
    input:{
        marginRight:'1rem'
    }
}

export default function TodoItem({todo, index, onChange}){
    return (
    <li style={styles.li}>
        <span>
            <input type="checkbox" style={styles.input} onChange={() => onChange(todo.id)}/>
            <strong>{index+1}</strong>
            &nbsp;
            {todo.title}
        </span>
        <button className='rm'>&times;</button>
    </li>
    )
}