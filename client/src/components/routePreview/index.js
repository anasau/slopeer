import { useQuery } from '@urql/preact';
import { route } from 'preact-router';

import { queries } from '../../services/graphqlService';
import { Spinner, Picture } from '../';
import style from './style.css';

const RoutePreview = ({ _id }) => {
  const [{ data, fetching }, _] = useQuery({
    query: queries.routeDetailsQuery,
    variables: { _id }
  });

  if (fetching) return <Spinner />;

  const { picture, name, type } = data.route;

  return (
    <div class={style.preview} onClick={() => route(`route/${_id}`)}>
      <Picture
        profile={false}
        picture={picture}
        type={type}
        routename={name}
        pictureStyle={style.picture}
        imageStyle={style.image}
      />
      <div class={style.details}>
        <h3>{name}</h3>
        <h4 class={style.type}>{type[0].toUpperCase() + type.slice(1)}</h4>
      </div>
    </div>
  );
};

export default RoutePreview;
