import React from 'react'

export const ListRelatedVideos = ({ aVideosPerLlistar, fClickedVideoID }) => {

    return (
        <ol>
            {aVideosPerLlistar.map((item, index) => {
                return (
                    <>
                        <li key={item[index].id} className="videoListLine">
                            {
                                <div className="videoListItem">
                                    <div className="videoListThumb">
                                        <img
                                            onClick={() => {
                                                fClickedVideoID({
                                                    dni: item[index].id,
                                                    titol: item[index].title,
                                                });
                                            }}
                                            src={item.bestThumbnail.url}
                                        />
                                    </div>
                                    <div className="videoListDesc">
                                        <Link to={`/video/${item[index].id}/${item[index].title}`}>
                                            <p>{item[index].title}</p>
                                        </Link>

                                        {/* <Link to={`/video/${item.id}`}>{item.title}</Link> */}
                                        {/* <a href={item.url}>{item.title}</a> */}
                                    </div>
                                </div>
                            }
                        </li>
                    </>
                );
            })}
        </ol>
    );
};
