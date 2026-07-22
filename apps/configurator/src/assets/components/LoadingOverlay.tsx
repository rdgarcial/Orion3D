export function LoadingOverlay() {
  return (
    <div style={{
      position:"absolute",
      inset:0,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"rgba(0,0,0,.5)",
      color:"white"
    }}>
      Loading 3D model...
    </div>
  );
}
