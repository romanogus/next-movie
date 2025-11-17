import { useEffect, useState } from "react";

const GUEST_SESSION_KEY = 'guest_session'

export default function useGuestSession(){
  const [guestSessionId, setGuestSessionId] = useState(localStorage.getItem(GUEST_SESSION_KEY));

  useEffect(() => {
    if(!guestSessionId){
      
    }
  })
}