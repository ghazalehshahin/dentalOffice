import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import CustomButton from '../../custombutton/custombutton.component';

import '../Modal-asab/Modal-asab.styles.scss';

export default class ModalImplant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <div>
                <CustomButton className='buttonmodal' onClick={() => this.openModal()} >توضیحات بیشتر</CustomButton>
                <Modal visible={this.state.visible} width="1500" height="550" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='paracontainer'>
                        <h3>ایمپلنت</h3>
                        <p className='paramodal'>
                        دندانپزشک زیبایی در بسیاری از موارد از ایمپلنت استفاده می کند. مواد ایمپلنتی در ترمیم دندان استفاده می شوند و برای جایگزینی دندان های از دست رفته استفاده به کار می روند.
 
 همان طور که در تصویر می بینید دندان فرد به دلیل  بعلت عصب کشی ناقص عفونی دیوار استخوانی را تخریب نموده است که با اجرای ایمپلنت دندان از دست رفته بهبود یافته است ونتیجه مثبتی حاصل شده است.
 
                        </p>
                        <h3>
                        باندینگ (پیوند) دندان
                        </h3>
                        <p className='paramodal'>
                        باندینگ دندان عملی است که در آن مواد رزین رنگ دندان ( مواد پلاستیکی با دوام)، به دندان استعمال شده و با تاباندن نور خاصی سخت می شود و در نهایت به دندان میچسبد تا لبخند را زیبا سازد. این روش از جمله کم هزینه ترین و آسان ترین روشهای جراحی زیبایی دندان است که در موارد مختلفی از آن استفاده می شود.


                        </p>
                        <h3>
                        تاج گذاشتن روی دندان
                        </h3>
                        <p className='paramodal'>
                        تاج به عنوان کلاه دندان می باشد. هنگامی که دندان ضعیف و یا به مقدار زیاد تخریب شود، برای بهبود شکل، اندازه و ظاهر دندان از تاج استفاده می کنند. بیشتر تاج ها، 5 تا 15 سال باقی می مانند.
 
 جنس تاج ها از فلز، چینی متصل به فلز، صمغ و یا سرامیک می باشد. قبل از قرار دادن تاج، دندان را کمی تراش می دهند و سپس تاج بر روی دندان چسبیده می شود و کاملا دندان را می پوشاند.
 دندانپزشک متخصص ترمیمی، مسئول حذف پوسیدگی ها، جبران شکستگی ها، رفع نواحی بد رنگ و یا بدشکل در تاج دندان ها می باشد. 
                        </p>
                        <CustomButton className='buttonmodal' onClick={() => this.closeModal()}>بستن</CustomButton>
                    </div>
                </Modal>
            </div>
        );
    }
}
