import Data from './data'

/** Test helpers */
import { getFixture, clearFixture } from '../../tests/helpers/fixture'

describe('Data', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('setData', () => {
    it('should set data in an element by adding a key attribute', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const data = {
        test: 'bsData'
      }

      Data.setData(div, 'test', data)
      expect(div.key).toBeDefined()
    })

    it('should change data if something is already stored', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const data = {
        test: 'bsData'
      }

      Data.setData(div, 'test', data)

      data.test = 'bsData2'
      Data.setData(div, 'test', data)

      expect(div.key).toBeDefined()
    })
  })

  describe('getData', () => {
    it('should return stored data', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const data = {
        test: 'bsData'
      }

      Data.setData(div, 'test', data)
      expect(Data.getData(div, 'test')).toEqual(data)
    })

    it('should return null on undefined element', () => {
      expect(Data.getData(null)).toEqual(null)
      expect(Data.getData(undefined)).toEqual(null)
    })

    it('should return null when an element have nothing stored', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      expect(Data.getData(div, 'test')).toEqual(null)
    })

    it('should return null when an element have nothing stored with the provided key', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const data = {
        test: 'bsData'
      }

      Data.setData(div, 'test', data)

      expect(Data.getData(div, 'test2')).toEqual(null)
    })
  })
})
