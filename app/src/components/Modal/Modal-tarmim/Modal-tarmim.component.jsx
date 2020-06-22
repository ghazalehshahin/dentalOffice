import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import CustomButton from '../../custombutton/custombutton.component';

import '../Modal-asab/Modal-asab.styles.scss';

export default class ModalTarmim extends Component {
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
                <Modal visible={this.state.visible} width="1500" height="350" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='paracontainer'>
                        <h3>ترمیم</h3>
                        <p className='paramodal'>
                        دندان ها به دلایل مختلف از جمله عدم رعایت بهداشت ممکن است دچار پوسیدگی شوند.
                         البته عوامل دیگری مانند ژنتیک، ردیف نبودن دندان ها و تغذیه نامناسب نیز در ایجاد پوسیدگی موثر است.
                         زمانی که دندان پوسیده می شود ترکیب شیمیایی آن دچار تغییر گشته، نرم و 
                         سست می شود و محلی جهت تجمع میکروب می گردد. در صورت درمان نشدن، دندان دچار تخریب شده و از دست می رود.
                           هرچه میزان از بین رفتن بافت دندان کمتر باشد، درصد موفقیت ترمیم دندان بیشتر و احتمال عود پوسیدگی آن کمتر می شود
                           تا هنگامی که پوسیدگی به پالپ دندان ( که عوام به آن عصب دندان می گویند ) نرسد ، 
                           می شود دندان را بدون درمان ریشه ( که عموما به آن عصب کشی میگویند ) پر کرد .
                            پس بهتر است هرچه زودتر دندانهای پوسیده را پر نموده تا پوسیدگی به عصب نرسد. 
                            البته پوسیدگی دندان تنها عامل مسبب عصب کشی نیست و ضربه و مشکلات لثه و شکستگی دندان نیز می‌تواند باعث آسیب عصب دندان شود.
                            دندانپزشک متخصص ترمیمی، مسئول حذف پوسیدگی ها، جبران شکستگی ها، رفع نواحی بد رنگ و یا بدشکل در تاج دندان ها می باشد. 
                        </p>
                        <CustomButton className='buttonmodal' onClick={() => this.closeModal()}>بستن</CustomButton>
                    </div>
                </Modal>
            </div>
        );
    }
}
