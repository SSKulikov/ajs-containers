import Team from '../app';
import Character from '../characters';

test('add new unique member', () => {
  const newMember = new Character('Ivan');
  const newTeam = new Team();
  newTeam.add(newMember);

  expect(newTeam.members).toEqual(new Set([{ name: 'Ivan' }]));
});

test('add existing member', () => {
  const newMember = new Character('Ivan');
  const newTeam = new Team();
  newTeam.add(newMember);

  expect(() => newTeam.add(newMember)).toThrow(`${newMember.name} is already in the team`);
});

test('add bunch of members', () => {
  const newMember = new Character('Ivan');
  const secondMember = new Character('Sergo');
  const thirdMember = new Character('Milana');
  const newTeam = new Team();
  newTeam.addAll(newMember, secondMember, thirdMember);

  expect(newTeam.members).toEqual(new Set([
    { name: 'Ivan' },
    { name: 'Sergo' },
    { name: 'Milana' },
  ]));
});

test('array from set', () => {
  const newMember = new Character('Ivan');
  const secondMember = new Character('Sergo');
  const thirdMember = new Character('Milana');
  const newTeam = new Team();
  newTeam.addAll(newMember, secondMember, thirdMember);

  expect(newTeam.toArray()).toEqual([
    { name: 'Ivan' },
    { name: 'Sergo' },
    { name: 'Milana' },
  ]);
});
