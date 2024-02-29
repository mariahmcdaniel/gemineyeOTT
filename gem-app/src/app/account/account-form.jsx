'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Avatar from './avatar'

export default function AccountForm({ user }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [username, setUsername] = useState(null)
  const [zipcode, setZipcode] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`first_name, last_name, username, zipcode, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFirstname(data.first_name)
        setLastname(data.last_name)
        setUsername(data.username)
        setZipcode(data.zipcode)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, zipcode, avatar_url }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        first_name: firstname,
        last_name: lastname,
        username,
        zipcode,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
        <Avatar
        uid={user.id}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ firstname, lastname, username, zipcode, avatar_url: url })
        }}
        />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstname || ''}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastname || ''}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="zipcode">Zip Code</label>
        <input
          id="zipcode"
          type="url"
          value={zipcode || ''}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>


      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ firstname, lastname, username, zipcode, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}