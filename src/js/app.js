export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error(`${newMember.name} is already in the team`);
    } else {
      this.members.add(newMember);
    }
  }

  addAll(...newMembers) {
    newMembers.forEach((newMember) => this.members.add(newMember));
  }

  toArray() {
    return Array.from(this.members);
  }
}
