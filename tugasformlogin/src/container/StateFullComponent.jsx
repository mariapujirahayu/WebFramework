import React from 'react';
import './StateFullComponent';

class StateFullComponent extends React.Component{
    render(){
        return <div className='container'>
        <div className='judul'>
            <h2>Form Login</h2>
        </div>
        <div className='col-lg-4 m-auto d-block'>
            <div className='card'>
                <form className='formlogin'>
                    <div className='subjudul'>
                        <h1>Tugas Pertemuan Ketiga</h1>
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type="text" placeholder='Masukkan username' title="Masukkan username" name="user" class="form-control" id="user" autocomplete="off" required></input>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" placeholder='Masukkan password anda' title="Masukkan password" name="pass" class="form-control" id="pass" autocomplete="off" required></input>
                    </div>
                    <div className='btnsubmit'>
                        <button type="submit" class="btn btn-success btn-block" value="submit" onclick="return;" autocomplete="off">Submit</button>
                    </div>
                    <div className='checkbox'>
                        <label><input type='checkbox'></input> Remember me</label>
                    </div>
                    <div className='btncancel'>
                        <button type="submit" class="btn btn-danger" value="cancel" >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    }
}

export default StateFullComponent;