# x1tub
Clon de la web de **YouTube/YouTube Music**.
A posteriori, s' afegiran funcionalitats específiques (p.e. reproducció en 2n pla).

## Propòsit
Oferir funcionalitats addicionals no incloses en a **YouTube/YouTube Music**.

## Estat del projecte
- 6: [S9N02Ex07 beta: Afegit llistat de videos relacionats. Millorant aspectes](#component-relatedvideos)
- 5: [S9N01Ex06: Web funcional amb llistat videos cercats (onSubmit) i detall del video escollit](#component-videoDetail)
- 4: [S9N01Ex05](#component-videoItem)
- 3: [S9N01Ex02-04: App, searchBar & videoList Components](#component-videoList)
- 2: [S9N01Ex01: Base del Projecte (<initialCommit>)](#crear-la-base-del-projecte)
- 1: [Fase Inicial: Planificació del projecte](#definició-de-la-arquitectura-de-la-aplicació)

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://github.com/marsalxavi)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://github.com/marsalxavi)

## Flux de la Aplicació
![Flux text](./src/Flow.dot.svg "Flux titol")

## Estil del codi
Estil standar

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Captures de pantalla

## Tecnologies/Framework

<b>Desenvolupat amb</b>
- [React](https://reactjs.org)
- [node-ytsr](https://www.npmjs.com/package/ytsr?activeTab=readme)
- [React-Hook-Forms](https://www.npmjs.com/package/react-hook-form)

## Característiques
Funcionalitats addicionals no incloses en la web/app oficial

## Desenvolupament: Fases del Projecte
### Fase I
#### Definició de la arquitectura de la aplicació
- Disseny de la pantalla per PC
- Components necessaris
- Vinculació entre els seus components
#### Crear la base del projecte
- Creació del projecte
- Instal·lació paquets i llibreries addicionals(Axios, UI,...)
#### Component App
- Components, mètodes, states,..
- Proves carrega vídeos API YouTube
- Proves cerca vídeos
#### Component SearchBar
- Disseny barra cerques. retorn del llistat de vídeos
#### Component VideoList
- Mostra el llistat de vídeos
#### Component VideoItem
- Mostra el vídeo seleccionat
#### Component VideoDetail
- Mostra el detall del vídeo seleccionat
### Fase II
#### Component RelatedVideos
- Mostra els videos relacionats

#### Funcionalitats addicionals
- Videos recomanats
- Historial de vídeos
- Menú lateral
- Favorits
#### Navegació
- Mapa del site
### Fase III
#### Pantalla Vídeos
- Descomposició en llistat de vídeos i detall del vídeo
#### Pantalla Principal
- Disseny d' un Dashboard amb accés a tots els components:
- - Llistat de vídeos
- - Historial
- - Favorits
- - ...
### Fase IV
#### Definició de la arquitectura de la aplicació
- Disseny de la pantalla per mòbil (responsive)

## Instal·lació
TBD
## Referencia de les API
TBD
## Tests
TBD
## Com fer servir?
TBD
## Contribucions
TBD
## Crèdits
TBD
#### Annexos
TBD
## Llicència
XMS © [xms]()