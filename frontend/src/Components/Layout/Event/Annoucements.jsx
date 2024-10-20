import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAnocement } from '../../../Redux/Action/EventAction'
import Loader from '../../Message/Loader'
import Message from '../../Message/Message'

const Annoucements = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnocement());
  }, [dispatch])


  const getAnnoucements = useSelector(state => state.getAnnoucements)
  const { loading, events, error, success } = getAnnoucements



  const LatestEvents = [
    {
      cover: 'https://tse2.mm.bing.net/th?id=OIP._jgRdIxBtUKFMCndkSCYIQAAAA&pid=Api&P=0&w=300&h=300',
      story: 'Destiny of cup',
      chapter: '15',
      event: 'New Chapter',
      date: '12/15/2024',
      time: '10:55',
      link: '',

    }
  ]

  return (
    <div className='w-full bg-customOrange'>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 bottom-1 border border-black">
        <h1 className='m-1 p-5 text-5xl '>Anouncement</h1>
        {loading && <Loader />}
        {error && <Message>{error}</Message>}
        {!loading | events?.length < 1 && <p>No event latest available</p>}
        {
          events.map((event, index) => (
            <div className="py-5 bottom-2 border border-black" key={index}>
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <div>
                    <img className='w-20 h-32' src={event.cover} alt='vndhwo' />
                  </div>
                  <span>{event.story}</span>
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="bg-orange-300 text-neutral-800 mt-3 group-open:animate-fadeIn">
                  <Link to={event.link}>
                    {event.event}
                  </Link>
                </p>
              </details>
            </div>

          ))
        }

      </div>
    </div>
  )
}

export default Annoucements
