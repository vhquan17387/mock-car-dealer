import React from 'react';
import Modal from '../UI/Modal';
import MenuList from './MenuList';

import s from "./Nav.module.css";


export default function PanelNavMenu({onClick}) {
   return (
    <Modal isMob={true} onDismiss={onClick}>
        <div className={s.menuPanel}>
            <MenuList mob={true} />
        </div>
    </Modal>
  )
}
