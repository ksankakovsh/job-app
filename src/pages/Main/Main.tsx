import * as React from 'react';
import { HeaderResponsive } from '../../components/Header/Header';

function Main() {
    return ( 
        <>
        <HeaderResponsive links={[{ link: './', label: 'Поиск вакансий'}, { link: './favorites', label: 'Избоанное'}]} />
        </>
    );
}

export default Main;