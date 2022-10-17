import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TrackCard from './../containers/track-card';
import QueryResult from '../components/query-result';
import { Layout } from '../components';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {

  const TRACKS = gql`
    # Query goes here
    query GetTracks {
      tracksForHome {
        id
        title
        thumbnail
        length
        modulesCount
        author {
          id
          name
          photo
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult
        loading={loading}
        error={error}
        data={data}
      >
        {
          data?.tracksForHome?.map(track => (
            <TrackCard key={track.id} track={track} />
          ))
        }
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
