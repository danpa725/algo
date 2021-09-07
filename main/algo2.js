function solution(genres, plays) {
    const MAX = genres.length;
    let sortedData = [];
    for (let idx = 0; idx < MAX; idx++) {
        sortedData[idx] = {
            genres: genres[idx],
            play: plays[idx],
            id: idx,
        };
    }
    const sortedGenres = [...new Set(genres)];
    const genresNumber = [];
    const newData = sortedGenres.map((genre) => {
        const bulk = [];
        sortedData.forEach((data) => {
            if (data.genres === genre) {
                bulk.push({ play: data.play, id: data.id });
            }
        });
        const totPlay = bulk.reduce((acc, curr) => {
            return acc + curr.play;
        }, 0);
        genresNumber.push({ genres: genre, play: totPlay });
        return { genre, data: [...bulk] };
    });
    const genreRank = genresNumber
        .sort(({ play: countA }, { play: countB }) => countB - countA)
        .map(({ genres }) => genres);
 
    const solution = [];
    // 최고 기록 2개 id 넣기
    genreRank.forEach(genre => {
        newData.forEach(({ data, genre: dataGenre }) => {
            if (dataGenre === genre) {
                const sortByPlay = data.sort(({ play: countA }, { play: countB }) => countB - countA);
                const sortByPlayLength = sortByPlay.length;
                if (sortByPlayLength >= 2) {
                    solution.push(sortByPlay[0].id, sortByPlay[1].id);
                }
                if (sortByPlayLength === 1)
                    solution.push(sortByPlay[0].id);
            }
        });
    });

    return solution
}
const gB = ["classic", "pop", "classic", "classic", "pop"]
const pB = [500, 600, 150, 800, 2500]
solution(gB, pB)
solution(["classic", "pop", "classic", "classic", "classic"], [500, 1000, 400, 300, 200, 100]);
