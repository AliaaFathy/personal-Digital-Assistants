function ProfileCard({title,handle,imgSrc}){
    return (
      <div>
          <img src={imgSrc} alt ="pda logo" />
          <div>title is {title} </div>
          <div>handle is {handle} </div>
      </div>
    );
}
export default ProfileCard;