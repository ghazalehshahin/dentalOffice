import React,{useState} from 'react';

import './report.styles.scss';
import FormInput from '../../components/forminput/forminput.component';
import CustomButton from '../../components/custombutton/custombutton.component';

export const Report = () => {
    const[firstName,setFirstName] = useState('');
    const[errorType,setError] = useState('');
    const[lastName,setLastName] = useState('');
    const[telephoneNumber,setTelephoneNumber] = useState('');
    return(
        <div>
            <div className='tozihat-khata'>
                <p>بیماران محترم برای گزارش خطا میتوانید از طریق راه های ارتباطی زیر یا ار طریق فرم ثبت خطا با ما در ارتباط باشید </p>
                <p>
                     shahinghazaleh@gmail.com :ایمیل
                    </p>
                    <p>
                    تماس: 09132130317
                </p>
            </div>
            <div className='reportdiv'>
            <div className='report-container'>
            <h3>گزارش خطا</h3>
            <form className = 'reserve-class'>
                        <FormInput
                            name = 'firstName'
                            type = 'text'
                            value = {firstName}
                            onChange = {e=> setFirstName(e.target.value)}
                            label='نام'
                            required
                        />
                        <FormInput
                            name = 'lastName'
                            type = 'text'
                            value = {lastName}
                            onChange = {e => setLastName(e.target.value)}
                            label='نام خانوادگی'
                            required
                        />
                        <FormInput
                            name = 'telephoneNumber'
                            type = 'tel'
                            value = {telephoneNumber}
                            onChange = {e => setTelephoneNumber(e.target.value)}
                            label='شماره تماس'
                            required
                        />
                        <FormInput
                            name = 'errorType'
                            type = 'text'
                            value = {errorType}
                            onChange = {e => setError(e.target.value)}
                            label='متن خطا'
                            required
                        />
                        <CustomButton className='button'>ارسال خطا</CustomButton>
            </form>
        </div>
        </div>
        </div>
    );
   
};