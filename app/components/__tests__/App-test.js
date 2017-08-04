import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Team from '../Team';
import Attending from '../Attending';
import PlacesToGo from '../PlacesToGo';
import PlacesToAvoid from '../PlacesToAvoid';

describe('App', () => {
  const alice = {
    name: 'Alice',
    wont_eat: ['meat', 'fish'],
    drinks: ['tea', 'juice']
  };

  const bob = {
    name: 'Bob',
    wont_eat: ['vegetable', 'fruit'],
    drinks: ['beer', 'whisky', 'soy milk']
  };

  const users = [alice, bob];

  const venues = [
    { name: 'The Swan', food: ['fish'], drinks: ['vodka'] },
    { name: 'Mildreds', food: ['vegetable', 'fruit'], drinks: ['juice'] },
    {
      name: 'Eat Tokyo',
      food: ['noodle', 'fish'],
      drinks: ['sake', 'beer', 'juice']
    }
  ];

  const placesToGo = [{ name: 'Eat Tokyo', cannotDrink: [], cannotEat: [] }];

  const placesToAvoid = [
    { name: 'The Swan', cannotDrink: [alice, bob], cannotEat: [alice] },
    {
      name: 'Mildreds',
      cannotDrink: [bob],
      cannotEat: [bob]
    }
  ];

  it('', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ users, venues, attendees: users });

    expect(wrapper.contains(<Team users={users} />)).toBe(true);
    expect(
      wrapper.containsMatchingElement(
        <Attending users={users} attendees={users} />
      )
    ).toBe(true);

    expect(wrapper.find('PlacesToGo').prop('places')).toEqual(placesToGo);
    expect(wrapper.find('PlacesToAvoid').prop('places')).toEqual(placesToAvoid);
  });
});
