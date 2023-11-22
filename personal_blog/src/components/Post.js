import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { format, utcToZonedTime } from 'date-fns-tz'
import nopicture from './nopicture.png'
import PropTypes from 'prop-types'

const Post = ({ username, content, timestamp, userImage }) => {
  const ISODateString = timestamp
  const timezone = 'America/Sao_Paulo'
  const zonedDate = utcToZonedTime(ISODateString, timezone)
  const formattedDate = format(zonedDate, 'dd/MM/yyyy HH:mm:ss', { timeZone: timezone })

  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex align-items-center">
          <Image
            src={nopicture}
            alt={username}
            roundedCircle
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <div className="d-flex">
            <Card.Title>{username}</Card.Title>
            <div style={{ marginLeft: '20px', fontSize: '15px'}} className="mb-2 text-muted">{formattedDate}</div>
          </div>
        </div>
        <Card.Text style={{ marginLeft: '60px'}}>{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Post.propTypes = {
  username: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
  timestamp: PropTypes.func.isRequired,
  userImage: PropTypes.func
}

export default Post
