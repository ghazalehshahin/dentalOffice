import React , {useState , useEffect} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import FormInput from '../forminput/forminput.component';
import './reserve.styles.scss';
import Select from 'react-select';
import CustomButton from '../custombutton/custombutton.component';

export const Reserve = () =>{
    const[selectedDay,setSelectedDay] = useState('');
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[telephoneNumber,setTelephoneNumber] = useState('');
    const[timeField,setTimeField] = useState('');
    const localDate = '';
    const [DatesContent, setDatesContent] = useState([]);

    const [TimesContent, setTimesContent] = useState([]);
    useEffect(async () => {
      await  fetch("http://127.0.0.1:8000/seapp/empty-dates/")
          .then(response => response.json())
          .then(json => setDatesContent(json));
      }, []);

    const handle_submit = async(evt) => {
        evt.preventDefault();
      await  fetch('http://localhost:3000/seapp/make-reserve/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify(data)
        })
          .then(res => res.json())

      };

      const handle_times = async(e) => {
          setSelectedDay(e);
       await fetch(`http://127.0.0.1:8000/seapp/empty-hours/?date=${e.value}`)
          .then(response => response.json())
          .then(json => setTimesContent(json))
          .then( console.log(TimesContent));
      };
   
        
        return (
           
            <div className='parentdiv'>
            <div className='div-reserve'>
                <form className = 'reserve-class' onSubmit = {handle_submit}>
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
                    {/* <DatePicker
                        value={selectedDay}
                        onChange = {setSelectedDay}
                        shouldHighlightWeekends
                        locale="fa" // add this
                    /> */}
                    <Select
                         placeholder="تاریخ مراجعه"
                         className="dropdown"
                         name="form-field-name"
                         value={selectedDay}
                         onChange={
                             handle_times
                                }
                            
                         options = {DatesContent.map((obj)=>({value : obj.date,label : obj.date.toUpperCase()}))}
                    />
                    <Select
                         placeholder="زمان مراجعه"
                         className="dropdown"
                         name="form-field-name"
                         value={timeField}
                         onChange={selectedOption => setTimeField(selectedOption)}
                         options ={ TimesContent.map((obj)=>({value : obj.date,label : "ساعت شروع : "+obj.startTime +"    "+ "ساعت پایان : "+obj.endTime}))}
                    />
                    <div className="span-class">
                    <span className="tozihat">:قابل توجه بیماران عزیز</span>
                    <br/>
                    <span className="tozihat-prim">زمان انتخابی شما زمان مراجعه ی دقیق شما نمیباشد لطفا یک ربع قبل از زمان انتخابی در مطب حضور داشته باشید</span>
                    </div>
                    <CustomButton className='button'>رزرو نوبت</CustomButton>
                </form>
            </div>
            </div>

        );
};
export default Reserve;