import React, {useState} from 'react';
import Birthday from './Birthday';
import data from '../data';

const BirthdaysList = () => {
  const [birthdays, setBirthday] = useState(data);

  return (
    <>
      <section>
        <p>{birthdays.length} cumpleaños para hoy</p>
        {birthdays.map((birthday) => {
          return (
            <Birthday key={birthday.id} {...birthday}></Birthday>
          )
        })}
        <button className="btn" onClick={() => setBirthday([])}>borrar cumpleaños</button>
      </section> 
    </>
  )
}

export default BirthdaysList;