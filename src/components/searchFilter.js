import React from 'react';
const SearchFilter =({keyword, onChange})=>(<div className="row">
  <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
    <input className="form-control" type="text" value={keyword} onChange={event=>{
      onChange(event.target.value);
    }} />
  </div>
</div>);
export default SearchFilter;
