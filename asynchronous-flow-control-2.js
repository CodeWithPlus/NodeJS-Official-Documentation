function getSong()
{
    let _song = "";
    let i = 100;

    for (i; i > 0; --i)
    {
        _song += `${i} beers on the wall, you take one down and press it around ${i - 1} bottles of the beer on the wall\n`;

        if (i === 1)
        {
            _song += `Hey, let get some more beer`;
        }
    }

    return _song;
}

function singSong(_song)
{
    if (!_song) throw new Error("Song is empty, FEED ME A SONG.");
    console.log(_song);
}

const song = getSong();
singSong(song);
