import './App.css'
import profilePhoto from './assets/avatar.jpg'

type Profile = {
  name: string
  interest: string
  major: string
  minor?: string
  bio: string
  photo: string
  photoAlt: string
}

const profile: Profile = {
  name: 'Wyn Roberts',
  interest: 'Game Dev | Software Engineering | Pixel Art',
  major: 'Computer Science',
  minor: 'Video Game Development & Design',
  bio: 'Combining strong technical skills with extensive leadership and teaching experience to glorify God in all things :)',
  photo: profilePhoto,
  photoAlt: 'Photo of Your Name',
}

function App() {
  return (
    <main className="page">
      <section className="card">
        <img className="avatar" src={profile.photo} alt={profile.photoAlt} />
        <h1>{profile.name}</h1>
        <p className="interest">{profile.interest}</p>
        <p className="degree">
          <strong>Major:</strong> {profile.major}
          {profile.minor && (
            <>
              {' · '}
              <strong>Minor:</strong> {profile.minor}
            </>
          )}
        </p>
        <p className="bio">{profile.bio}</p>
      </section>
    </main>
  )
}

export default App