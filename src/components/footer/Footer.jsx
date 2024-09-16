import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { IoCard } from "react-icons/io5";
import style from "./footer.module.css"

const Footer = () => {
  return (
    <div className="container">
        <div className={style.footer}>
        <div className={style.footerBox}>
            <div className={style.footerBox_card}>
                <h2 className={style.footerBox_card_headText}>Əlaqə</h2>
                <ul className={style.footerBox_card_headText_ul}>
                    <li className={style.footerBox_card_headText_li}>(077) 613-59-59</li>
                    <li className={style.footerBox_card_headText_li}><FaFacebook/>-Facebook</li>
                    <li className={style.footerBox_card_headText_li}><FaInstagramSquare/>-Instagram</li>
                    <li className={style.footerBox_card_headText_li}><FaTelegram/>-Telegram</li>
                </ul>
            </div>
            <div className={style.footerBox_card}>
                <h2 className={style.footerBox_card_headText}>Kontakt</h2>
                <ul className={style.footerBox_card_headText_ul}>
                    <li className={style.footerBox_card_headText_li}>Şirkət haqqında</li>
                    <li className={style.footerBox_card_headText_li}>Karyera</li>
                </ul>
            </div>
            <div className={style.footerBox_card}>
                <h2 className={style.footerBox_card_headText}>Kateqoriyalar</h2>
                <ul className={style.footerBox_card_headText_ul}>
                    <li className={style.footerBox_card_headText_li}>Elektronika</li>
                    <li className={style.footerBox_card_headText_li}>Avtomobil</li>
                    <li className={style.footerBox_card_headText_li}>Menzil</li>
                    <li className={style.footerBox_card_headText_li}>Paltar</li>
                    <li className={style.footerBox_card_headText_li}>Kitab</li>
                </ul>
            </div>
        </div>
        <div className={style.footerBottom}>
            <div className={style.footerBottom_left}>
                <RiVisaLine/>
                <IoCard/>
            </div>
            <p className={style.footerBottom_right}>© EasySale 2024</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
