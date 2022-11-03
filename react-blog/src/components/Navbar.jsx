import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/context'
// import logo from '../images/logo.jpg'
const Navbar = () => {

  const {currentUser,logout} = useContext(AuthContext)
  const navigate = useNavigate()


  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link className='link' to="/">
             <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD5CAMAAABRVVqZAAAApVBMVEX39/f///+YzP1HiMe23P7f8P4yf8Tx8/Wcz/9bmNNEhsb//fq74P/7+vhAg8M7gsXm9f9clMyGvPCSx/mNtd5xotS7zuWZud3U4OxLi8iu1vp6ptS/0+lom89Ukc2UwezV6frj6vHJ2OmFteSeyfGrxODG3vRloNpwqeGRs9l3q92ivt6izPO90enR3+/d6POwzut9tep4o9KGrdfL4/ft+v+nx+gV2mjLAAARo0lEQVR4nO2d2XbiOBBAAQcTZGyZdFgcsAkQQgey093//2ljq0ryDl4kQ+ZQDzN9EoJ8XYtKpa3VuspVrnKVq1zlh4gZyrkfpbKYpmGYveV0NR+PN5vxePW+7JnGjwPyKXqrzcF1qK5TIbrlfO9XPePH0PjaWI4Pjo9ACNHiQogP5G6WP4LGNKcTT6cpiCiPTzO/dEPz9bH3dCufIqRxNpcMYxrTGaUpkyIWSNzcfJi5ce4nzhHTWLl67GH9x9c8d7dbrxe+rNe7rRcQid/r7vIiFWNMIyCBJrzR+ulhwOQmEPjX63pLBA2hF6gYs3eIgFBttHjgCAnxf7rYchiiv1yaXoxx6CMW2T3dZFKEOA87DkNHF8Vi9kZcJcQaLk5wIMwI4xx1z/34ETFWVIC4rwU4AObVARjLvRi9GHtUCbH6hUGYoGLo7EJ835zp6CPaohSIr5g1OJi+vwQWs+Wiv1u7chyMZYEs7+e3MbM3hIchzlNJlSCLBX99bhBfhuAmVr8CB2NZMxY6ObeJmagTuquiEmDps5dBe4Y/TjtfgmmMgMRaVya5uXkgYGKeO5uMP8zzDGSMFyQpG7niagETI0EGTXVtNm81b2vGWJdA4osTSaf9USZ5WTYMYy7RT+qSoFoiYwP90GsUxoTgVctPQB6CQVls/Expk0NMY8KUYo1qk9wMRvBSIqMyjQ4bG5WZH8xRiFefRMjDYt2n3NgIXTVkZAaa14M8kptgWPaw9jARIvq4ERZzzBqk9R0lTbPwUDP6phEWLVAK6UsnYTQ8pOkNjPzNDShFrnmFLK/Y1ehT9b7PYqdVPfM6KZCZEa2nGASVQpSBCBZL9QDTZPqX0DkeE4+x6CulJmaudOVKCTNmpSjGNwtfCj0lEBxg+imMQpSerqB3zGBx2RvTFJKA0xNXrVJugjSTqWWsTi0Ge1vWQjXJzWDH1DJUF8R6ciPxEeWCWvQPVWox58y+trLs60hFc7Bl+p+oQjEOMu1rsLOO1AKfmAF4yrTC+kdJ6RcrT+ZXaAcsQdKXilCWLBRLGnI9sGcldJuDwsaXqmIYuoqc/hHreUGnnu0xrJskBzUxzNxb0lzFd5RwMJ+Z0T0wZ1EUjiFrsV5lkMSqRpnF2gFzTF0JSctgGauMXoXPrlg4Z5ZVvIHkRf9QgmLK8vpwnugdi2BWuq+CDp+qyfRZAJPQQXI/obN2m0/SpFnABtWEMHMqKYD1kcRtB3LQc2yMhTC6V4ICsbjmAHLwpJEoSbs90bN9/4mhKFmnAAUwa12L5GaHnk6/21z2yJLo+F/VdSwwWKnVrQwWDq9z3bfbSZbEiI4lx0RJscLcM5Sn6iCv6CUa0TftqODEk5OB8q0EZWLVQRm8bvnKC4tM23GZwdxAzF0uFGVws+iHS46+W+2kQL0o9uUqDawqymDwutPEBIpF5ymQdnuZNjGVbl8BZTAYPCxGxBIzW0Q/ZID48ga1nEiof4VgrNDtj0ewQSg3D6+L9daxQo5gneFHNkm7PUrO2rAuUs2Q+EQwDhTwtFjvdiN3u932hw6xaHRejoG854H4KQyUQELPh95eSVmPd5FZvf3g5mnX19izo2hJofosGbfiAoV1oRbMweZKUFY5OViwIpJaWY8v9EF1b987CuKLEyviYmasZJrFnLLMOJn2DW7WmpVPEYQsnyPXRSLCtE40/r19hXUKSPKTM3drkgNC2CJ8ffgyXxbgCESL1qZwFKmoTMHipRNFEasg4dmt4NlBqOW4h/3bR7o3zBeoSOO7gh5S1dg+NSDmw0FwB2c0+VxNl8ueL2UIhMTmCVhNT1XFJVWmGOz4RDuls8JmdERGoYVhAFM0xYLd/SLUiYUgzriSFlLyFtaksaSnaBIPOhYxjOQLOQkdS+Foo4URjaF4mroAhotbRJ3iAYfow5MdRnFha07AWZjXq5uOpOKl8WkDVjaRJy/ChJ/UpfiBwEIdrOQ/wWJB9/TzlZA3bsKDNVHo9XzFJEYY1hkTIpWk/cETCuzrla0OiZbyX2GGbSUXBXqWoJME61UE0opOsIABkKFcknab5aR+QgEdpKtuWjWc9oJYmTm2rSWw7miArqKkNAkSTkZChkRlk7TZG7IGg76m1FVEJ+m7JcxJSQ3ETKBjGeASBGUgLZ7nayJDUoWyUFcD42IM2dt6hSGefmSoXg8F51QVopgtFwetMCW1VIUC6zNVbgPtQRHRD8d9sGU1KOQVU26ijMV0edH3gUUayV19iLIWE+GqSHB/RFBB8hRkLQJF83i1QNWWIyPcotFXixLWPdRMduNafE20pQ4lbEPNMBJXsEfaUopCYKCvZlqVlb/JvdUICtH+qCu5QJWCPguPUYsy61JlPT5HEWpRikLfHhmKwmlV+vlMG0AhxH5WaGAwKTH56zWBcrA/2ZtT4/ZYyf87oepR6LN9r25+pdViKKT7qB6FOLbNknBFNT1YME3f/o6IahTr3oZYTBQtOIRJg5n9RlWj0D/2ROXaSSy40EfbU4xChrbN0gple1hwSf7933+WWhT6z/7HLEBZzZjvI3zsKkaxul1NcfUI6mB+PGaBUhkKmUEDGlW3dY2r5R8kFapQ6DNkFErPejDB4enjUCnKI5QpFCrFR3mH4ZcXDFnV+Qr8V1e616tlHGD8pWJGIkSBWK+w+A3iheM8FSghCVG+XXVJQxb5KJ5AaeDYHT9BFsMj+SU9PkQlTWzt9ln4GiNd4twwCn410Zs5CMFcDsHI9CLriUpJD1dPO8q23iVZzA2BtQ6yUfDYi0mrwUNDWLcvf36FrZ6zGj0zDAfHOatTqwtUQhTut80QMGpPNspM7Wx9psDaMOkhDFL7JkH4XLFsv4fFFMoTlrhgUexFLgqsZFa2cThHcK5YLoqrcjlbrphQpjq+Crqk4NrJZkHE6kOpFrZRV/A+igI9i9SlIbhupvEj9XA1grR1k+32OxRymwYR5+xI7CVhCYWSDSsnBHZp6NLWUUEqqe44iiNisDWbmiMLBdacjM5yNiiWkCWlx3AE0ZlOn0W1SBoWQ+Gz4aRFCO5pkrLADabSGk6KQzH20jwffJ6qmk4pILAAiS5rozia8srqccG6a/01ut+warnZ4WNc8ATdugvzwVHOFIiFQN2VTuqQfOrNVFaPC6+76vvqJHMofik+O68AC3+Qyixv/AvOfQZ4cOw/PErFocsGC5JnjMMhywEPaq7k+/yQjTO7PIpgGS7LgvBbA6xLuSiDsxD6Vo6EH65zQVd+GC+4QlT/LlHka/EraOj3+S9jEMJ931dM4Ug2JvwalnMMHPMFSvswN1LIylaeOD/k7DcxxAUKMKgYbXNqCPPmhdcbnaHEclQiKGxr9OHIfpCPl9gNYA3PQZwUjhKeDEIO84wQ0Fu9OHp4I9YFo7gk3LXu6+Y7SXKv0/CgAYu6Kk8xrCqAYu39fD2c19eoF1NMaxQxLEs/tOZnmOQ6KYji5/qtPYksUojWY94iB7pQ+tLD0yguF8WXuasLGkom7/5D9973TvgzffjJYtzlo7Tby81Q50t4LaoHR1ZwkOj5IT8BJXCMceyuQhHZoue5/BAUXzUeTcJQLdbf/BiUYO4n2hf60Tnx+x+E4sN4OjtDKPAYJ3VW0MWhmMGtw1OaieKb2dtk5rrfL58Za3sAZX7Wu7BCCqO1XG38h4VbDUrWkGB3tTP8ftmslq3zXbnsY/RWk5EW3JuMx1BVQoHDkahO3Ml8aTR/uZdpmNPJkFIrdpRWWZS3WFQI/Ml7WbWapPE5Vgeip0+gIiXPdBmlv4EGZw41RWMaHxNNzz7YjNAS+9aXkVOsEjiHaQMwpulnWPEj8tA84H964fm8uR7/y3gPNBwrXqlnmhsn1oUTy8ItB/do93rByh4v0tAZW8REHBLzOz+93iu8eM1sbaIJvN92//ddp8N2TYz+/uN3ejrL0yA9l5fOJrArwrrr3P3uR0+A8+1s31N0EJUxjmiEWNr2rnN72+n8AhTb5vtYyekzUfj6XkI+bRtRboNvu/vtRC9eI0pukTOmwxDEItu7ACMQjtLtdvmrTuZaSdnwWp73aHc5Cnzb7e3dVgu3KVNH+oLj6G3WxPK+OsgRR7Hv+TO6x8pHB+EmXfZHURRG89UPKxn6t1yXMeZE7By2+kIhSZSu/Ul5PMpdTs1PLg92dGWiBDC/tpGLyiVevWaK6m4A8ivKkUDp2n/E3W85a5LeBewz/kkaJaCJwOgjWe5vTEVfFmik0zmC4gsvq2Sfkcvvk6bDR/yLbBSAEYqR4zHGRqjESYOkUewJP6k8I40ZcTc5hJ/PQfFh7riKpdwgHxgXV8nv2wySFErXfuahNpnG8FSF0M/Ix3NRfJgv3m1St66RiTugNctLOkkeStd+5BdHx9MYnqpYzp/op4+g+FYmjj536p1PYy55buSrJLOtLBT/8WYZaYxIVdxu7LPHUALFcBb6XsNhzKkIN1leko/S/XsQVj7afASFsRkvWRDXLoPiK4ZnETV2Ghk8cFr9Ti5JNorYlM/SXM0Jy5Uafe6WQvFlKwJ8RRZjxW17mw+Sh2Ifomlu9N9u8pOnUW5/12Mx3znJ1zGSHJTun8jcUVToZ7c0SuAwpDoL32lHTpDkodjp0S77umHqgwVQ/C6Gb5Ur7y/mkuDBRvkOH0HRvG5SnjPVEu1REAV28R9H8Z0fv6D8msSeU5AEUSLdd+wRk+KlPgarFk+hCBZCS/Yv/FQz6yRJ5xZ2mOqp1/1M0ySYDac+RbRTzYQs5c4/E/fXnybx1YI+9XhaLcRJ2SFejFGgodtfYPOllvaI++tPeDw28YWH6CZf+GdKLSml2LA8Jj+XiDV0h0coF1+0wO+vL9aA30QfVx0mn3OYUAshScUhrVewIUxiii/oM0Hp5GjPGBOcgU/240m1pGAfsdb8q2A72FcWXmbJHaXgq+oIzZNkRLadBEq2NxWzY2gJ744udmyYWBhR9FWFbysZke1/MbVY94lf46LcfmESX+DtFFuSjOZV4lV1REROdYCx+ilNxDgerUu0IwygiInhQvsSjsIEIzKJP629j1S4rWQvWjwOR1m4AZw2MX5rUCmQ/IgcUUtCKaXicLQl7JJP7nQxZlVeVSc3Ijt5KCXjcEQgUzp5cwb6fFnzYoIPHIvI0XktK9Y/lo3DoaCJnfJ8OGyqVPQSLWBfHM1N4gOwqPGVj8ORlmCLyPFjqvDS99L2Cy1kRORYBNNDC6sUh0VDdwVuWkelOFUayIrIsXnTaAb2XC248Ib6oJZjSoGtNZW0Hgg6pIjIMfuKWVilOBzK3cmb1o1RHaWkI7KdmHzlFoZlsmp2zBqCayDy78E2l/WUkorIb8l0EqchPvE8q8rtoFryM2S+/7R6CzxFgoicsC+hrkercpjkgt6SPwhjdTdSWe2dMCJ76fjFEB9rxuFEO3knbMJFHuWyu3QbEJGtmZ22L7CwWnE4bIepP+/cQHD6Sh19tA0RkVP2BRZWLw6LZn7DbH+2heHREKeqOKckrFqk7ItZGHhT5Tgcbya7KobHF9YIKyAiImcXj6DEXz0Oi2b6sAItCwXtq3YbnVu4kIk4aaXwH5LaLwzfWHbXAvu0K2SqacHHTpOIxT0yWgELyzg1Aa6DrG9fnTAi50qtOCxaYRaWlVPCwSwS7KsTmQ/JlrpBEhv5Yg6RUXuBS7tqxy9sxsu0LpSacZgLzIZkHJYCoZjIaQVDZY551Y3DKNBLpsOx+c5cpV4XHGnmK9fE6sdh3sY2eycPnoYtqxkekTMcRUZggSa+ss/UxnuuJOk+kDyflxGHQX5l31lqwI1a8trJichS4jAX9o3p8+okZMVxyYzINfPhRAvZ12Pi9XYSG8qMyJLiMDYAfp8YSuLVz1L6LiHpiCzTF3minwxheCWctAAGTSUjsrQ4HP3+5MU5GIu/buVKIiL3JX/9XVY0NmGmy+tLlrhWlHx9slZhpAevP0WSp1fBzc8/UpLjeyNzFcePkOTFJv8nlKH+cyWRhPV+sLSucpWrXOUqV7nKVa5ylatc5bLlP5xoERm0ClnJAAAAAElFTkSuQmCC' alt="hjbh" />
          </Link>
        </div>

        <div className="navlinks">
            <Link className='link' to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className='link' to="/?cat=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className='link' to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className='link' to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className='link' to="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <span>{currentUser?.username}</span>
            {
              currentUser ? <span onClick={logout}>Logout</span> :
              <Link className='link' to='/login'>Login</Link>
            }
            <span className="write">
              <Link className='link' to='/write'>Write</Link>
            </span>
            
        </div>
        
      </div>
    </div>
  )
}

export default Navbar