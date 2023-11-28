import "./rightBar.scss"
// we need to do something about this
const RightBar = () => {
    return (
      <div className="rightBar">
        <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span>Jane Smith</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <span>Clara Kaiser</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          </div>
          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <p>
                  <span>Ji Xu</span> updated her profile
                </p>
              </div>
              <span>5s ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/1852300/pexels-photo-1852300.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                />
                <p>
                  <span>Jin Lee</span> liked a post
                </p>
              </div>
              <span>10 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/2014864/pexels-photo-2014864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <p>
                  <span>June Ku</span> commented
                </p>
              </div>
              <span>27 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <p>
                  <span>Jonah Hill</span> posted
                </p>
              </div>
              <span>10 hr ago</span>
            </div>
          </div>
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div className="online" />
                <span>Katelyn Sill</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div className="online" />
                <span>Silas Marsh</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div className="online" />
                <span>Marshall Hood</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div className="online" />
                <span>Jocelyn Perez</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div className="online" />
                <span>Jacki Lancaster</span>
              </div>
            </div>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <div className="online" />
                <span>Paul Thurman</span>
              </div>
            </div>
           
            </div>
          </div>
        </div>
    
    );
  };
  
  export default RightBar;
