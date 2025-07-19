import React, { useState } from 'react';
import '../styles/settings.css'

const Settings = () => {
  const [accountInfo, setAccountInfo] = useState({
    fullName: 'Aditya Rajpoot',
    email: 'aditya@example.com',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public', // 'public' or 'private'
    dataSharing: false,
  });

  // Handlers for form inputs can be added here for editing functionality

  return (
    <div className="page-content settings-page">
      <h1>Settings</h1>

      {/* Account Information */}
      <section className="settings-section account-info">
        <h2>Account Information</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={accountInfo.fullName}
            onChange={(e) => setAccountInfo({ ...accountInfo, fullName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={accountInfo.email}
            onChange={(e) => setAccountInfo({ ...accountInfo, email: e.target.value })}
          />
        </div>
      </section>

      {/* Change Password */}
      <section className="settings-section change-password">
        <h2>Change Password</h2>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            value={passwords.currentPassword}
            onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={passwords.newPassword}
            onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            value={passwords.confirmPassword}
            onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
          />
        </div>
      </section>

      {/* Notification Preferences */}
      <section className="settings-section notifications">
        <h2>Notification Preferences</h2>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={() =>
              setNotifications({ ...notifications, emailNotifications: !notifications.emailNotifications })
            }
          />
          <label htmlFor="emailNotifications">Email Notifications</label>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="smsNotifications"
            checked={notifications.smsNotifications}
            onChange={() =>
              setNotifications({ ...notifications, smsNotifications: !notifications.smsNotifications })
            }
          />
          <label htmlFor="smsNotifications">SMS Notifications</label>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="pushNotifications"
            checked={notifications.pushNotifications}
            onChange={() =>
              setNotifications({ ...notifications, pushNotifications: !notifications.pushNotifications })
            }
          />
          <label htmlFor="pushNotifications">Push Notifications</label>
        </div>
      </section>

      {/* Privacy Settings */}
      <section className="settings-section privacy-settings">
        <h2>Privacy Settings</h2>
        <div className="form-group radio-group">
          <label>Profile Visibility</label>
          <div>
            <input
              type="radio"
              id="public"
              name="profileVisibility"
              value="public"
              checked={privacy.profileVisibility === 'public'}
              onChange={() => setPrivacy({ ...privacy, profileVisibility: 'public' })}
            />
            <label htmlFor="public">Public</label>
          </div>
          <div>
            <input
              type="radio"
              id="private"
              name="profileVisibility"
              value="private"
              checked={privacy.profileVisibility === 'private'}
              onChange={() => setPrivacy({ ...privacy, profileVisibility: 'private' })}
            />
            <label htmlFor="private">Private</label>
          </div>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="dataSharing"
            checked={privacy.dataSharing}
            onChange={() => setPrivacy({ ...privacy, dataSharing: !privacy.dataSharing })}
          />
          <label htmlFor="dataSharing">Allow data sharing with partners</label>
        </div>
      </section>

      <button className="btn-save-changes">Save Changes</button>
    </div>
  );
};

export default Settings;