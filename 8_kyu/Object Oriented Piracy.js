class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    isWorthIt() {
        const draftWithCrew = this.crew * 1.5
        const draftWithBooty = this.draft - draftWithCrew
        return draftWithBooty > 20
    }
}