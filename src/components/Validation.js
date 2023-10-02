import { useForm, useFieldArray } from 'react-hook-form';

function Validation() {
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
        <button type="submit" className="my-3 btn btn-danger p-2">Submit</button>
      </div>
    </form>
  )
  return (
    <div className="App">
      {basicInformation}
    </div>
  );
}

export default Validation;
