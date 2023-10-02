import { useForm, useFieldArray } from 'react-hook-form';

const UserInformation = (props) => {
  const { register, control } = props;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "users"
  });
  return (
    <div className="container mt-2">
      <div className="card">
        <div className="card-header">User Information</div>
        <div className="card-body">
          <form onSubmit={(event)=>{event.preventDefault()}}>
            {
              fields.map((item, index) => (
                <div className="form-row form-group">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Enter Your First name" name={`users[${index}].firstName`} {...register(`users[${index}].firstName`)} defaultValue={item.firstName} />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Enter Your Last name" name={`users[${index}].lastName`} {...register(`users[${index}].lastName`)} defaultValue={item.lastName} />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Enter Your E-mail Address" name={`users[${index}].emailAddress`} {...register(`users[${index}].emailAddress`)} defaultValue={item.emailAddress} />
                  </div>
                  <div className="col">
                    <label for="state">Select Your State</label>
                    <select className="form-control" id="state" name={`users[${index}].state`} {...register(`users[${index}].state`)} defaultValue={item.state}>
                      <option value="">Select Your State</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Assam">Assam</option>
                      <option value="Goa">Goa</option>
                      <option value="Manipur">Manipur</option>
                    </select>
                  </div>
                  <div className="col">
                    <button className='btn btn-danger my-2' onClick={()=>{remove(index)}}>delete</button>
                  </div>
                </div>
              ))
            }
            <button type='submit' className='btn btn-primary my-2 p-1'
              onClick={() => append({ firstName: "", lastName: "", emailAddress: '', state: '' })}
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function BasicForm() {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const basicInformation = (
    <form onSubmit={handleSubmit(onSubmit)} className='container pt-3'>
      <div className="card p-3">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name='fullname'
            {...register("fullname")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name='phone'
            {...register("phone")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            {...register("password")}
          />
        </div>
        <div className="form-group mt-2">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="male" value="male" name="gender" {...register("gender")} />
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="female" value="female" name="gender" {...register("gender")} />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" id="other" value="other" name="gender" {...register("gender")} />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
        </div>
        <button type="submit" className="my-3 btn btn-primary p-2">Submit</button>
      </div>
    </form>
  )
  return (
    <div className="App">
      {basicInformation}
      <UserInformation register={register} control={control} />
    </div>
  );
}

export default BasicForm;
