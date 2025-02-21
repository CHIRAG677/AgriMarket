import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowCircleLeft, FaHome, FaCalendarAlt, FaUser, FaPhoneAlt, FaMapPin, FaBriefcase } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { MdCameraEnhance } from "react-icons/md";
import "./Profile.css";
import Navbar from "./Navbar";

function Profile() {
  const navigate = useNavigate();  
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80");
  const [formData, setFormData] = useState({                 
    email: "Email@example.com",
    firstName: "Name",
    lastName: "Last Name",
    phone: "Phone Number",
    location: "Location",
    joinDate: "Join Date",
    position: "Position",
    bio: "Your Bio Here..."
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const notification = document.querySelector('.notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-container">
      <Navbar/>
      <button className="back-button" onClick={() => navigate(-1)}>
         <FaArrowCircleLeft size={20} /> Back 
      </button>

      <div className="sidebar">
        <div 
          className="profile-image-container"
          onMouseEnter={() => setShowProfileOverlay(true)}
          onMouseLeave={() => setShowProfileOverlay(false)}
        >
          <img src={profileImage} alt="Profile" className="profile-img" />
          <div className={`profile-overlay ${showProfileOverlay ? 'show' : ''}`}>
            <label htmlFor="file-upload" className="file-upload-label">
              <MdCameraEnhance size={24} />
              <span>Change Photo</span>
            </label>
            <input 
              type="file" 
              id="file-upload" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="file-upload-input"
            />
          </div>
        </div>
        
        <div className="user-info">
          <h2>{formData.firstName} {formData.lastName}</h2>
          <p className="user-position">{formData.position}</p>
        </div>
        <nav className="menu">
          <Link to="/my-app/farmer" className="menu-item">
            <FaHome size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/my-app/profile" className="menu-item active">
            <FaUser size={20} />
            <span>Profile</span>
          </Link>
          <Link to="/my-app/About" className="menu-item">
            <GiOpenBook size={20} />
            <span>About</span>
          </Link>
          <Link to="/my-app/Login" className="menu-item logout">
            <CiLogout size={20} />
            <span>Logout</span>
          </Link>
        </nav>
      </div>
      
      <main className="content">
        <div className="header">
          <h1>Profile Settings</h1>
          <button className={`edit-button ${isEditing ? 'active' : ''}`} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={!isEditing} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} disabled={!isEditing} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} disabled={!isEditing} />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} disabled={!isEditing} />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} disabled={!isEditing} />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} disabled={!isEditing} rows={4} />
          </div>

          {isEditing && <button type="submit" className="submit-btn">Save Changes</button>}
        </form>
      </main>

      <div className="notification">Changes saved successfully!</div>
    </div>
  );
}

export default Profile;
