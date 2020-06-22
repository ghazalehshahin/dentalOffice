import React,{useState} from 'react';
import asab from '../../components/directory/images/asab.jpg';
import jermgiri from '../../components/directory/images/brsgh.jpg';
import implant from '../../components/directory/images/implant.jpg';
import tarmim from '../../components/directory/images/trmim.jpg';
import jarrahi from '../../components/directory/images/jrh.jpg';
import CustomButton from '../../components/custombutton/custombutton.component';
import ModalAsab from '../../components/Modal/Modal-asab/Modal-asab.component';

import './servicepage.styles.scss';
import ModalJerm from '../../components/Modal/Modal-jerm/Modal-jerm.component';
import ModalImplant from '../../components/Modal/Modal-implant/Modal-implant.component';
import ModalTarmim from '../../components/Modal/Modal-tarmim/Modal-tarmim.component';
import ModalJarrahi from '../../components/Modal/Modal-jarrahi/Modal-jarrahi.component';

 export const ServicePage = () =>{
    return(
    <div className='service-page'>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>عصب کشی دندان</h3>
            </div>
            <div>
                <img className='img'src={asab} alt = 'عصب کشی' />
                <p className = 'paragraph'>
                عصب‌کشی دندان یک درمان به‌ظاهر پراسترس برای مراجعین است 
                درحالی‌که در واقعیت، این درمان یکی از کم‌عارضه‌ترین درمان‌ها برای نگهداری و جلوگیری از کشیده شدن 
                دندان‌های شماست که تحت بی‌حسی موضعی و با کمترین اذیت انجام می‌شود
                 </p>
                 <>
                <ModalAsab
                />
                </>
            </div>
        </div>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>جرمگیری دندان</h3>
            </div>
            <div>
                <img className='img' src={jermgiri} alt = 'جرمگیری' />
                <p className = 'paragraph'>
               	در روش جرمگیری دندان، جرمهای روی دندان و لثه و رنگدانه‌های خارجی از روی دندانها برداشته می‌شود.
                	اگر فردی در مصرف چای زیاده روی کند و یا سیگاری باشد 
                    و رنگدانه های ایجاد شده روی دندان وی زیاد باشد با انجام جرمگیری تفاوت چشمگیری ایجاد می‌شود.
                 </p>
                 <>
                <ModalJerm
                />
                </>
            </div>
        </div>
        <div className='item'>
            <div className='titlecontainer'>
            <h3 className='title'>ایمپلنت</h3>
            </div>
            <div>
                <img className='img' src={implant} alt = 'ایمپلنت' />
                <p className = 'paragraph'>
                دندانپزشک زیبایی در بسیاری از موارد از ایمپلنت استفاده می کند. 
                مواد ایمپلنتی در ترمیم دندان استفاده می شوند و برای جایگزینی دندان های از
                 دست رفته استفاده به کار می روند.
                 </p>
                 <>
                <ModalImplant
                />
                </>
            </div>
        </div>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>ترمیم دندان</h3>
            </div>
            <div>
                <img className='img' src={tarmim} alt = 'ترمیم دندان' />
                <p className = 'paragraph'>
                ترمیم دندان در واقع کنترل مشکلات دهان و دندان و اصلاح شرایط زیبایی آن است. به عبارت بهتر در ترمیم دندان، ساختار صدمه دیده یا 
                از دست رفته دندانها تصحیح میشود. ترمیم دندان باعث بهبود ظاهر دندانها خواهد شد 
                و در نهایت نه تنها به سلامت دندانهای شما کمک خواهد کرد، بلکه لبخند زیبا و فریبنده‌ای هم برای شما خلق خواهد کرد
                 </p>
                 <>
                <ModalTarmim
                />
                </>
            </div>
        </div>
        <div className='item'>
        <div className='titlecontainer'>
            <h3 className='title'>جراحی دندان</h3>
            </div>
            <div>
                <img className='img' src={jarrahi} alt = 'جراحی' />
                <p className = 'paragraph'>
                جراحی دندان بخشی از دندانپزشکی است .
                 دندانپزشکی یک شاخه پزشکی است که با دندان ، لثه و دهان سرو کار دارد. دندانپزشکان با معالجه ، 
                 پیشگیری ، تشخیص و بررسی اختلالات و بیماری های حفره دهان سروکار دارند. که شامل مخاط دهان و 
                 دندان و همچنین کلیه بافت ها و ساختارهای مرتبط با آن ها (مانند ناحیه فک و صورت) می باشد.
                 </p>
                 <>
                <ModalJarrahi
                />
                </>
            </div>
        </div>
    </div>
    );
 };